import React from 'react'
import "./Management.css"
import management from  "../images/Management.svg"

function Management() {/*
    const managementImage={
        marginTop:'-232px',
        marginLeft:'20px',
        height:'140vh'
    }*/
    return (
        <div className="management">
            <div  >
                <img className="management_imgimg"/*style={managementImage}*/src={management} alt="Management_image" />
            </div>
            <div className="management_content">
                <div >
                     <h3>Business Management</h3>
                     <p>Teaches all the aspects of business and entrepreneurship management with practical and experimental learnings.</p>
                </div>
                <div className="management_gap">
                    <h3>Life Skills Management</h3>
                    <p>Teaches all the inspect of life from Finance management to stress management and from advance communication skills to advance leadership skills.</p>
                </div>
                <div className="management_gap">
                    <h3>Career Management</h3>
                    <p>Teaches al the aspects of career management from choosing right career to make active strategies for growth.</p>
                </div>
                <div className="management_gap">
                    <h3>Competition Management</h3>
                    <p>Helps in Planning,Preparing and Cracking jobs.</p>
                </div>
                <div className="management_gap">
                    <h3>Emergency Management</h3>
                    <p>Helps to understand and find scope and career in emergency and risk management services.</p>
                </div>
                <div className="management_gap">
                    *It can be said that any student who completes all the modules will not be unemployed throughout his life until he/she choose to be.
                    The detailed module & sub-modules will be discussed during meeting and will be the part of MOU(Memorandum of understanding) with the institute.
                </div>
               

            </div>
            
        </div>
    )
}

export default Management
