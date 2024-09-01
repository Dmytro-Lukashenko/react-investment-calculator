const UserInput = ({ input, handleInputChange }) => {   
    return <section id="user-input">
        <div className="input-group">
            <p>
                <label>Initial Investment</label>
                <input type="number" required onChange={(event) => handleInputChange('initialInvestment', event.target.value)}  value={input['initialInvestment']}/>
            </p>
            <p>
                <label>Annual Investment</label>
                <input type="number" required onChange={(event) => handleInputChange('annualInvestment', event.target.value)} value={input['annualInvestment']}/>
            </p>
        </div>
        <div className="input-group">
            <p>
                <label>Expected Return</label>
                <input type="number" required onChange={(event) => handleInputChange('expectedReturn', event.target.value)} value={input['expectedReturn']}/>
            </p>
            <p>
                <label>Duration</label>
                <input type="number" required onChange={(event) => handleInputChange('duration', event.target.value)} value={input['duration']}/>
            </p>
        </div>
    </section>
}

export default UserInput;