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
          this.setState({ feed: json.results.slice(0, 5) });
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
    var finalRender = <div></div>;
    if (this.state.feed == null) {
      finalRender = <div></div>;
    } else {
      console.log("123");
      console.log(this.state.feed);
      finalRender = this.state.feed.map(e => {
        return (
          <div>
            <div className="Desplayed">
              <h1>{e.title}</h1>
              <div>
                <img src={e.multimedia[0].url} alt={e.multimedia[0].caption} />
              </div>
              <p>{e.abstract}</p>
            </div>
          </div>
        );
      });
    }
    return (
      <div>
        <h1 style={{ textAlign: "center", marginTop: "20px" }}>
          Today's top stories
        </h1>
        <div style={{ overflow: "scroll", height: "500px" }}>{finalRender}</div>
      </div>
    );
  }
}
export default News;
