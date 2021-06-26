var React = require("react");
var ReactDOM = require("react-dom");

class Note extends React.Component {
    del() {
        alert("Delete feature");
    };

    render() {
        return (
            <div>
                <h2>{this.props.children}</h2>
                <button onClick={this.del}>Delete</button>
            </div>
        );
    };
};

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mang: ["iOS", "Windows", "Android"]
        };
    };
    
    render() {
        return (
            <div>
                {
                    this.state.mang.map((e, i) => {
                        return (
                            <Note key={i}>{e}</Note>
                        );
                    })
                }
            </div>
        );
    };
};

ReactDOM.render(
    <List />,
    document.getElementById("root")
);
