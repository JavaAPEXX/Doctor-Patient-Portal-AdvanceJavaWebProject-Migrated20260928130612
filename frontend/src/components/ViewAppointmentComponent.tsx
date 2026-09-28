import React from 'react';

type ViewAppointmentComponentProps = {
    data?: Record<string, any>;
};

export const ViewAppointmentComponent: React.FC<ViewAppointmentComponentProps> = ({ data = {} }) => {
    const { background, box, errorMsg, successMsg } = data;

    return (
        <div className="modern-container">
            <div className="modern-card">
                <!DOCTYPE html>
        <html>
        <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0"> -->
        <title>View Appointment Page</title>
        
        
        <style type="text/css">
        .my-card {
        	box-shadow: 0px 0px 10px 1px maroon;
        	/*box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.3);*/
        }
        
        /* backgournd image css */
        .my-bg-img {
        	background: linear-gradient(rgba(0, 0, 0, .4), rgba(0, 0, 0, .4)),
        		url("img/hospital1.jpg");
        	height: 20vh;
        	width: 100%;
        	background-size: cover;
        	background-repeat: no-repeat;
        }
        
        /* backgournd image css */
        </style>
        
        
        </head>
        <body>
        
        	{(empty userObj ) && (
        
        		<c:redirect url="/user_login.jsp"></c:redirect>
        
        	)}
        
        
        	<div className="container-fluid my-bg-img p-5">
        		<p className="text-center fs-2 text-white"></p>
        
        	</div>
        
        
        
        	<div className="container-fluid p-3">
        		<p className="fs-2"></p>
        
        		<div className="row">
        
        
        
        			<div className="col-md-9">
        				<div className="card my-card">
        					<div className="card-body">
        						<p className="fw-bold text-center myP-color fs-4">Appointment
        							List</p>
        
        						{(not empty successMsg ) && (
        							<p className="text-center text-success fs-5">{successMsg}</p>
        							<c:remove var="successMsg" scope="session" />
        						)}
        
        						{(not empty errorMsg ) && (
        							<p className="text-center text-danger fs-5">{errorMsg}</p>
        							<c:remove var="errorMsg" scope="session" />
        						)}
        
        						<div className="modern-table-wrapper"><table className="modern-table" className="table table-striped">
        							<thead>
        								<tr className="my-bg-color text-white">
        									<th scope="col">Full Name</th>
        									<th scope="col">Gender</th>
        									<th scope="col">Age</th>
        									<th scope="col">Appointment Date</th>
        									<th scope="col">Phone</th>
        									<th scope="col">Diseases</th>
        									<th scope="col">Doctor Name</th>
        									<th scope="col">Status</th>
        								</tr>
        							</thead>
        							<tbody>
        
        
        								<tr>
        									<td></td>
        									<td></td>
        									<td></td>
        									<td></td>
        									<td></td>
        									<td></td>
        									<td></td>
        									<td>
        									</td>
        
        
        								</tr>
        
        
        
        
        							</tbody>
        						</table></div>
        
        
        
        
        					</div>
        				</div>
        
        			</div>
        
        			<div className="col-md-3 p-3">
        				<img alt="" src="img/wdoc.jpg" width="250" height="" />
        			</div>
        
        
        
        		</div>
        
        
        	</div>
        
        
        
        
        
        </body>
        </html>
            </div>
        </div>
    );
};

export default ViewAppointmentComponent;
