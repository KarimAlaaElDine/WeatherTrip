import React from "react";
import { render } from "react-dom/cjs/react-dom.production.min";
import { store } from "./Store";
class News extends React.Component {
  constructor(props) {
    super(props);
  }
  UNSAFE_componentWillMount() {
    var prop = this.props;
    const apiKey = `o2BGfRs5ksCxBw1WzxItDGBpwFuMMR0L`;
    const API = `https://api.nytimes.com/svc/topstories/v2/world.json?api-key=${apiKey}`;
    const promise = fetch(API);
    promise
      .then(response => {
        let j = response.json();
        j.then(json => {
          let f = json.results.slice(0, 5);
          console.log(f);
          this.props.refeed(f);
          console.log(this.props);
        });
        //
      })
      .catch(error => {
        console.log(error);
      });
  }
  componentDidMount() {}

  render() {
    console.log(this.props);

    console.log(`in render ${this.props.feed}`);
    var finalRender = <div></div>;
    if (this.props.feed == null) {
      finalRender = <div></div>;
    } else {
      console.log("123");
      console.log(this.props.feed);
      finalRender = this.props.feed.map(e => {
        let Image = e.multimedia ? (
          <img src={e.multimedia[0].url} alt={e.multimedia[0].caption} />
        ) : (
          <img
            src="https://image.shutterstock.com/image-photo/business-newspaper-isolated-on-white-260nw-1272343108.jpg"
            alt="Not found"
          />
        );
        return (
          // eslint-disable-next-line react/jsx-key

          // eslint-disable-next-line react/jsx-key
          <div className="NewsItem">
            <h1>{e.title}</h1>
            <div>{Image}</div>
            <p>{e.abstract}</p>
          </div>
        );
      });
    }
    return (
      <div
        style={{
          backgroundColor: "rgba(193, 222, 231, 0.322)",
          position: "absolute"
        }}
      >
        <h1
          style={{
            textAlign: "center",
            marginTop: "20%"
          }}
        >
          Today's top stories
        </h1>
        <div
          style={{
            overflow: "scroll",
            height: "500px",
            padding: "20px",
            paddingTop: "0px",
            marginTop: "0px",
            position: "relative"
          }}
        >
          {finalRender}
        </div>
      </div>
    );
  }
}
export default News;
