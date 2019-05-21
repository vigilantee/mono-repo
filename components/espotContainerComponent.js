import React from 'react';
import {
  WebView,
} from 'react-native';
import HTML from 'react-native-render-html';

export class EspotContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: ""
        };
    }

    componentDidMount = () => {
        fetch("https://test2.childrensplace.com/api/getESpot", {
            method: 'get',
            headers: {
                "espotname": "LOYAL_MiniBagMSpot",
                "catalogid": 10551,
                "langid": -1,
                "storeid": 10151,
                "devicetype": "app"
              },
        }).then((res)=> res.json()).then(res => {
          console.log(res.List[0].maketingText);
          this.setState({
            data: res.List[0].maketingText
          });
        })
      .catch(err => {
        console.log("Error in API");
        console.log(err);
      });
    }

    render() {
        return(
            <HTML html={this.state.data}></HTML>
        )
    }
}