import './App.css';



function App() {
  return (
    <div className="App">
            <head>
    <meta charset="UTF-8"></meta>
    <meta http-equiv="X-UA-Compatible" content="IE=edge"></meta>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
    <link rel="stylesheet" href="static/style.css"></link>
    <script defer src="static/script.js"></script>
    <script defer src="static/command_handler.js"></script>
    <title><center>Jupyter Notebook</center></title>
    </head>
<body>
    <div id="nav">
        <h2><center>Jupyter Notebook</center></h2>
    </div>
    <div id="commands">
        <button onclick="addCell()"><center>Add cell</center></button>
        <button onclick="runCell()" id="run"><center>Run cell</center></button>
    </div>
    <div id="cell-list">
        <div class="cell" id="1" onclick="selecteCell(this)"> 
            <h4>[1]</h4>
            <textarea onkeyup="do_resize(this);"></textarea>
            <p></p>
        </div>
    </div>
</body>
        </div>
  );
}

export default App;
