
require([
    "esri/config",
    "esri/Map",
    "esri/views/MapView",
    "esri/layers/FeatureLayer",
  ], function(esriConfig, Map, MapView, FeatureLayer) {

    esriConfig.apiKey = "AAPK123966446383430e9072e3136c0855e1PknkflV5gDwLxSGrNgtMkBA025642jWMkuYMWk02FQC8sk5VNtsZwC9zaIuug7Ce";

    const map = new Map({
      basemap: "arcgis-topographic" //Basemap layer service
    });

    view = new MapView({
      container: "viewDiv",
      map: map,
      center: [-122.1697,37.4275], //Longitude, latitude
      zoom: 13
    });

    const birdsList = ["Highlight by species...",  "House Finch",
                           "California Thrasher", "Anna's Hummingbird",
                           "Acorn Woodpecker", "Pine Siskin",
                           "White-crowned Sparrow", "Mourning Dove", 
                           "Yellow-rumped Warbler"];
    let whereClause = birdsList[0];

    const select = document.createElement("select","");
      select.setAttribute("class", "esri-widget esri-select");
      select.setAttribute("style", "width: 200px; font-family: 'Avenir Next'; font-size: 1em");
      birdsList.forEach(function(query){
        let option = document.createElement("option");
        option.innerHTML = query;
        option.value = query;
        select.appendChild(option);
      });

      view.ui.add(select, "top-right");

      select.addEventListener('change', (event) => {
        whereClause = event.target.value;
        queryFeatureLayer(view.extent);
      });

    birdsLayer = new FeatureLayer({
      url: "https://services9.arcgis.com/KXba0OlCfQgBRkt8/arcgis/rest/services/bird-observations/FeatureServer",
      renderer: {
            type: "simple",                    // autocasts as new SimpleRenderer()
            symbol: {                          // autocasts as new SimpleMarkerSymbol()
              type: "simple-marker",
              color: "#FFDB00",
              outline: {                       // autocasts as new SimpleLineSymbol()
                color: "#333",
                width: 2
              }
            }
        },
      popupTemplate: {                     // autocasts as new PopupTemplate()
            title: "Bird species",
            content: [{
              type: "fields",
              fieldInfos: [
                {
                  fieldName: "common_name",
                  label: "Common name",
                  visible: true
                },
                {
                    fieldName: "scientific_name",
                    label: "Scientific name",
                    visible: true
                },
                {
                    fieldName: "place_guess",
                    label: "Approximate location of observation",
                    visible: true
                },
              ]
            }]
          },
      });

    function queryFeatureLayer(extent) {

      const birdQuery = {
        where: "common_name = '" + whereClause + "'",  // Set by select element
        spatialRelationship: "intersects", // Relationship operation to apply
        geometry: extent, // Restricted to visible extent of the map
        outFields: ["common_name", "place_guess"], // Attributes to return
        returnGeometry: true
      };
      view.graphics.removeAll();
      birdsLayer.queryFeatures(birdQuery)

        .then((results) => {

          displayResults(results);
          console.log("Feature count: " + results.features.length)

        }).catch((error) => {
          console.log(error.error);
        });

    }

    function displayResults(results) {
      // Create a blue polygon
      const symbol = {                          // autocasts as new SimpleMarkerSymbol()
        type: "simple-marker",
        color: "#ff0000",
        outline: {                       // autocasts as new SimpleLineSymbol()
          color: "#333",
          width: 2
        },
      };

      const popupTemplate = {
        title: "{common_name} details",
        content: "I love cats"
      };

      // Assign styles and popup to features
      results.features.map((feature) => {
        feature.symbol = symbol;
        feature.popupTemplate = popupTemplate;
        return feature;
      });

      console.log("rf", results.features)

      // Clear display  
      view.popup.close();
      view.graphics.removeAll();
      // Add features to graphics layer
      console.log("post", results.features)
      view.graphics.addMany(results.features);

    }

    map.add(birdsLayer, 0);

  });
