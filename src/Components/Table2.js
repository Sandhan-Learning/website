import React from 'react'
import "./styles/Table.css"

function Table2() {
    return (
        <div>
			<div className="tables">
            <table class='table'>
					<thead class='thead-light'>
						<tr>
							<th scope='col'>S.No</th>
							<th scope='col'>Year</th>
							<th scope='col'>Total Intake</th>
							<th scope='col'>Enrollment</th>
							<th scope='col'>Student passed</th>
							<th scope='col'>Placement</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<th scope='row'>1</th>
							<td>2012-2013</td>
							<td>3463402</td>
							<td>2157563</td>
							<td>1380853</td>
							<td>560669</td>
						
						</tr>
						<tr>
							<th scope='row'>2</th>
							<td>2013-2014</td>
							<td>3723719</td>
							<td>2189445</td>
							<td>1504871</td>
							<td>613076</td>
							
						</tr>
						<tr>
							<th scope='row'>3</th>
							<td>2014-2015</td>
							<td>3961910</td>
							<td>2142103</td>
							<td>1586027</td>
							<td>673947</td>
							
						</tr>
							<tr>
							<th scope='row'>4</th>
							<td>2015-2016</td>
							<td>3836961</td>
							<td>2085460</td>
							<td>1638040</td>
							<td>701527</td>
							
						</tr>
							<tr>
							<th scope='row'>5</th>
							<td>2016-2017</td>
							<td>3702702</td>
							<td>1954985</td>
							<td>1713839</td>
							<td>722868</td>
							
						</tr>
							<tr>
							<th scope='row'>6</th>
							<td>2017-2018</td>
							<td>3551957</td>
							<td>1895487</td>
							<td>1570643</td>
							<td>715798</td>
							
						</tr>
							<tr>
							<th scope='row'>7</th>
							<td>2018-2019</td>
							<td>3392845</td>
							<td>1856524</td>
							<td>1534211</td>
							<td>794371</td>
							
						</tr>
							<tr>
							<th scope='row'>8</th>
							<td>2019-2020</td>
							<td>3285018</td>
							<td>1845664</td>
							<td>-------</td>
							<td>774146</td>
							
						</tr>
						
					</tbody>
				</table>
				<p>*2020 Data is not clear and hence not mentioned in the table</p>
				</div>
        </div>
    )
}

export default Table2
