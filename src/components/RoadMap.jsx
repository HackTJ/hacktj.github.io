import React, {
  Component
} from 'react';
import ReactMapGL from 'react-map-gl';

class RoadMap extends Component {

  state = {
    viewport: {
      // width: 778,
      // height: 391,
      latitude: 38.8185123,
      longitude: -77.1709422,
      zoom: 1
    }
  };

  render() {
    return ( <
      ReactMapGL {
        ...this.state.viewport
      }
      onViewportChange = {
        (viewport) => this.setState({
          viewport
        })
      }
      // TODO: hide access token
      mapboxApiAccessToken = "pk.eyJ1IjoidmFydW4xNDcwIiwiYSI6ImNqc2FzcTg0dDAxeDc0NG9hdnl2ZW96ajAifQ.tm0RFQRooHhcpOKw9lL_9g" /
      >
    );
  }
}

export default RoadMap;
