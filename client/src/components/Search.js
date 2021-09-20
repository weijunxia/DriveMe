import React, { useState } from 'react'
import './search.css'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import PeopleIcon from '@material-ui/icons/'
import { Button } from '@material-ui/core'
import { DateRangePicker } from 'react-date-range'
import { useHistory } from 'react-router'

function Search() {
  const history = useHistory()
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())

  const selectionRange = {
    startDate: startDate,
    endDate: endDate
  }

  function handleSelect(ranges) {
    setStartDate(ranges.selection.startDate)
    setEndDate(ranges.selection.endDate)
  }

  return (
    <div className="search">
      <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
      <Button onClick={() => history.push('/search')}>Search DriveMe</Button>
    </div>
  )
}

export default Search
