import React from 'react'
import { Link} from 'react-router-dom'
import { Button } from 'react-bootstrap'
export default function MainPages() {
    return (
        <div>
            <Button as={Link} to='/cv'>click to cv</Button>
        </div>

    )
}
