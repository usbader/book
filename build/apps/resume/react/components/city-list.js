MyComponents.City = React.createClass({
  render: function() {
  var date = new Date(this.props.city.currently.time*1000);
// Hours part from the timestamp
  var hours = date.getHours();
// Minutes part from the timestamp
  var minutes = "0" + date.getMinutes();
// Seconds part from the timestamp
  var seconds = "0" + date.getSeconds();

// Will display time in 10:30:23 format
var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
  
  
    return (
      <div className="card">
        <div className="card-content">
        <span className="card-title">{this.props.city.name.toUpperCase()}</span>

          <div className="col s6">
            <div className="card grey">
              <div className="card-content black-text">
             
                <ul>
                  <li><h6><b>Summary:</b> {this.props.city.daily.summary}</h6></li>
                  <li><h6><b>Time:</b> {formattedTime}</h6></li>
                  <li><h6><b>Humidity:</b> {this.props.city.currently.humidity}%</h6></li>
                  <li><h6><b>Temperature:</b> {this.props.city.currently.temperature} deg</h6></li>
                  <li><h6><b>Conditions:</b> {this.props.city.currently.summary}</h6></li>
                  <li><h6><b>Wind:</b> {this.props.city.currently.windSpeed} mph</h6></li>
                  <li><h6><b>Nearest Storm:</b> {this.props.city.currently.nearestStormDistance} miles</h6></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  


});

MyComponents.CityList = React.createClass({
  render: function() {

    var cityElements = this.props.cities.map(function(c,i){
      return <MyComponents.City city={c} key={i}/>
    })

    return (
      <div className="card">
        {cityElements}
      </div>
    );
  }
});
