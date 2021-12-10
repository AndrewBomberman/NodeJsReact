import {useState} from 'react'
function Form(){
    const [state,setState] = useState();
    const [date,setDate] = useState();
    const [cases,setCases] = useState();
    const [deaths,setDeaths] = useState();
    const handleSubmit = (e) => {
        e.preventDefault();
        const localdate = new Date(date).toLocaleDateString('en-GB');
        const data = {
            "state":state, 
            "date":localdate, 
            "cases":cases, 
            "deaths":deaths 
        };
        console.log(data);
        e.target.reset();
        fetch('http://localhost:8000/api/home',{
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        }).then( async (response) => {
            let res = response;
            console.log(res);
        });
    }
    return(
        <div className="Form">
            <div className="card bg-primary">
                <div class="card-header text-light text-center">Add</div>
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <p className="card-text">
                            <div class="form-floating mb-3">
                                <input type="text" class="form-control" id="floatingInput" placeholder="State" name="state" required onChange={(e)=>setState(e.target.value)}/>
                                <label for="floatingInput">Input State:</label>
                            </div>
                            <div class="form-floating mb-3">
                                <input type="date" class="form-control" id="floatingInput" placeholder="Date" name="date" required onChange={(e)=>setDate(e.target.value)}/>
                                <label for="floatingInput">Select Date:</label>
                            </div>
                            <div class="form-floating mb-3">
                                <input type="number" min="0" class="form-control" id="floatingInput" placeholder="Cases" name="cases" required onChange={(e)=>setCases(e.target.value)}/>
                                <label for="floatingInput">Input Cases:</label>
                            </div>
                            <div class="form-floating mb-3">
                                <input type="number" min="0" class="form-control" id="floatingInput" placeholder="Deaths" name="deaths" required onChange={(e)=>setDeaths(e.target.value)}/>
                                <label for="floatingInput">Input Deaths:</label>
                            </div> 
                        </p>
                        <button className="btn btn-dark" >Add</button>
                    </form>
                </div> 
            </div>
        </div>
    )
}

export default Form;