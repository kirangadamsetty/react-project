// <div id = "parent">
//     <div id  = "children">
//         <h1>I am h1 tag</h1>
//         <h2>I am h2 tag</h2>
//     </div>
// </div>
const heading = React.createElement("div", {
    id: "parent"
}, [
    React.createElement("div", {
        id: "children"
    }, [
        React.createElement("h1", {
            id: "head"
        }, "I am h1 tag here"),
        React.createElement("h2", {
            id: "head2"
        }, "I am h2 tag here")
    ]),
    React.createElement("div", {
        id: "children2"
    }, [
        React.createElement("h1", {
            id: "head3"
        }, "I am h1 tag here"),
        React.createElement("h2", {
            id: "head4"
        }, "I am h2 tag here")
    ])
]);
const container = ReactDOM.createRoot(document.getElementById("root"));
container.render(heading);

//# sourceMappingURL=index.6bd02f5a.js.map
