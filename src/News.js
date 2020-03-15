import React from "react";
import { render } from "react-dom/cjs/react-dom.production.min";

class News extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      feed: null
    };
  }
  UNSAFE_componentWillMount() {
    const apiKey = `o2BGfRs5ksCxBw1WzxItDGBpwFuMMR0L`;
    const API = `https://api.nytimes.com/svc/topstories/v2/world.json?api-key=${apiKey}`;
    const promise = fetch(API);
    promise
      .then(response => {
        let j = response.json();
        j.then(json => {
          console.log(json);
          this.setState({ feed: json.results[0] });
        });
        //
      })
      .catch(error => {
        console.log(error);
      });
  }
  componentDidMount() {}

  render() {
    console.log(`in render ${this.state.feed}`);

    if (this.state.feed == null) {
      return <div></div>;
    } else {
      console.log("123");
      console.log(this.state.feed);
      return (
        <div>
          <h1 style={{ textAlign: "center", marginTop: "20px" }}>
            Today's top story
          </h1>
          <div className="Desplayed">
            <h1>{this.state.feed.title}</h1>
            <div>
              <img
                src={this.state.feed.multimedia[0].url}
                alt={this.state.feed.multimedia[0].caption}
              />
            </div>
            <p>{this.state.feed.abstract}</p>
          </div>
        </div>
      );
    }
    //return outis;
  }
}
export default News;
