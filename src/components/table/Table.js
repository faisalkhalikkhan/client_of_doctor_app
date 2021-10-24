import './style.css'

import MaterialTable from 'material-table'
import { IconButton } from '@material-ui/core'
import { Map } from '@material-ui/icons'
import { Image } from 'cloudinary-react';

const Table = ({ data }) => {

    const columns = [
        { title: "Avatar", field: 'photo', render: rowData => <Image cloudName="ddjlbktoe" publicId={rowData.photo} width="150" height="160" /> },
        { title: 'Name', field: 'name' },
        { title: 'Degree', field: 'degree' },
        { title: 'Timing', field: 'appointment_time' },
        { title: 'Address', field: 'address' },
        { title: 'Email', field: 'email' },
        { title: 'Fees', field: 'fees' },
        { title: 'Map', field: 'address_point', render: rowData => <IconButton><a href={rowData.address_point}><Map /></a></IconButton> }
    ]

    return (
        <div className="table">
            <MaterialTable
                title="Doctor's"
                data={data}
                columns={columns}
                options={{
                    exportButton: true,
                }}
                style={{
                    height: "500px",
                    overflow: "scroll"
                }}
            />
        </div>
    )
}

export default Table
