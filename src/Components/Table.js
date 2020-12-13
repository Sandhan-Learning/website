import React from 'react'
import "./styles/Table.css"

function Table() {
    return (
        <div className="tablesection">
            <div className="tables">
                <h1>Synopsis of life time expenditure of parents on their child</h1>
            <table class='table'>
					<thead class='thead-light'>
						<tr>
							<th scope='col'>S.No</th>
							<th scope='col'>Detail</th>
							<th scope='col'>From (in Rs.)</th>
							<th scope='col'>To (in Rs.)</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<th scope='row'>1</th>
							<td>School fees (Monthly)</td>
							<td>3000</td>
							<td>6000</td>
						</tr>
						<tr>
							<th scope='row'>2</th>
							<td>Additional tuition fees (Monthly)</td>
							<td>1500</td>
							<td>3500</td>
						</tr>
						<tr>
							<th scope='row'>3</th>
							<td>Extracurricular activities (Monthly)</td>
							<td>1000</td>
							<td>1500</td>
						</tr>
						<tr>
							<th scope='row'>4</th>
							<td>Entrance exam coaching (One time)</td>
							<td>200000</td>
							<td>500000</td>
						</tr>
						<tr>
							<th scope='row'>5</th>
							<td>Engineering fees (4 years)</td>
							<td>400000</td>
							<td>1000000</td>
						</tr>
						<tr>
							<th scope='row'>6</th>
							<td>MBA Fees (2 years)</td>
							<td>300000</td>
							<td>500000</td>
						</tr>
						<tr>
							<th scope='row'>7</th>
							<td>Hostel, accommodation and others</td>
							<td>400000</td>
							<td>500000</td>
						</tr>
					</tbody>
				</table>
                <div className="table_downpara">
                                <p>Apart from that there are many other expenditure that parents spent for example, transport, school tours etc. that makes their investment not less than 20 Lac for one child. 
Even after this much of expenditure maximum students are clueless about their career and always in fear of unemployment and no career. 
</p>
</div>
                </div>

        </div>
    )
}

export default Table
