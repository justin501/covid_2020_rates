# Covid-19 Maps

<p>
In this project, I created two interactive web maps that visualize covid-19 data collected by The New York Times in United States during the year 2020.
</p>
<p>
The first visualization is a choropleth map that focuses on covid rates by county in USA, 2020. When viewers hover their mouse, the county name and case number per county will show. 
</p>
<p>
The second visualization is a proportional symbols map that focuses on covid-19 cases in USA, 2020. When viewers click on the location, the number of total cases per US county will show. The legend displays the proportion of circle size to number of cases.
</p>

### References
<p>
The base maps were referenced from
 <a href="https://www.mapbox.com/">Mapbox</a>. 
 Data was sourced from <a href="https://github.com/nytimes/covid-19-data/blob/43d32dde2f87bd4dafbb7d23f5d9e878124018b8/live/us-counties.csv">The New York Times</a>.
  Population data used to calculate case rates are from <a href="https://data.census.gov/cedsci/table?g=0100000US.050000&d=ACS%205-Year%20Estimates%20Data%20Profiles&tid=ACSDP5Y2018.DP05&hidePreview=true">2018 ACS 5 Year Estimates</a>.
 U.S. County shapefile was sourced from <a href="https://www.census.gov/geographies/mapping-files/time-series/geo/carto-boundary-file.html">the U.S. Census Bureau</a>. Geojson files were converted through <a href="https://mapshaper.org/">Mapshaper</a>. 
</p>