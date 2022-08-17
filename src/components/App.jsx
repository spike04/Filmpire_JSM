import React from 'react'
import { CssBaseline } from '@mui/material'
import { Route, Routes } from 'react-router-dom'
import useStyles from './styles'
import { Actor, MovieInformation, Movies, Navbar, Profile } from './'

const App = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Navbar />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Routes>
          <Route path="/movie/:id" element={<MovieInformation />} />
          <Route path="/actors/:id" element={<Actor />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/" element={<Movies />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
