import { Component } from "react";
// import Tablename from "../Components/function components/table";

class TableItems extends Component {
    render()
    {
        return(
            <>
          <table border={1}>
            <tr>
            <th>S.no</th>
            <th>ipl team</th>
            <th>full form</th>
            <th>captain</th>
           
            </tr>
            <tr>
                <td>1</td>
                <td>RCB</td>
                <td>Royal Challengers for Bangalore</td>
                <td>Faf Du plisses</td>
                
            </tr>
            <tr>
                <td>2</td>
                <td>SRH</td>
                <td>Sunrises Hyderabad</td>
                <td>Pat Cummins</td>
            </tr>
            <tr>
                <td>3</td>
                <td>CSK</td>
                <td>Chennai Super Kings</td>
                <td>Rituraj Gaikwad</td>

            </tr>
            <tr>
                <td>4</td>
                <td>KKR</td>
                <td>Kolkata Knight Riders</td>
                <td>Shreyas Iyer</td>
            </tr>
          </table>
            </>
        )
    }
}
export default  TableItems