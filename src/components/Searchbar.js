import React, { useState } from 'react'
import '../styles/Searchbar.css'
import { IoIosSearch } from 'react-icons/io'
import { GoSearch } from 'react-icons/go'
import { FaCaretDown, FaSortAmountUp } from 'react-icons/fa'
import { useRecoilState } from 'recoil'
import { sortDropdownState, headlineDropdownState } from '../recoil'
import SortChoices from '../components/SortChoices'

const Searchbar = ({ search, setSearch, toggleShow }) => {
    const [showDropdown, setShowDropdown] = useRecoilState(sortDropdownState)
    const [headlineDropdown, setHeadlineDropdown] = useRecoilState(headlineDropdownState)
    const handleSortToggle = () => {
        setShowDropdown(!showDropdown)
        setHeadlineDropdown(false)
    }

    const handleCaretDownToggle = () => {
        setHeadlineDropdown(!headlineDropdown)
        setShowDropdown(false)
    }

    return (
        <div className='searchbar'>
            <IoIosSearch className='searchbar__icon'
                style={{ display: toggleShow ? 'none' : 'block' }} />
            <input
                placeholder='Type something in the search'
                className='searchbar__input'
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <div className='searchbar__dropdown' >
                <FaSortAmountUp onClick={handleSortToggle}
                    style={{ color: showDropdown && 'blue' }}
                />
                <div className='dropdown'
                    style={{ display: showDropdown ? 'block' : 'none' }}>
                    <SortChoices />
                </div>
                <div style={{ display: showDropdown ? 'block' : 'none' }}
                    className="backdrop" onClick={() => setShowDropdown(false)}
                >
                </div>
            </div>

            <div className='searchbar__dropdown' >
                <FaCaretDown
                    onClick={handleCaretDownToggle}
                    style={{ color: headlineDropdown && 'blue' }}
                />
                <div className='dropdown'
                    style={{ display: headlineDropdown ? 'block' : 'none' }}>
                    <h1>That's just it</h1>
                </div>
                <div style={{ display: headlineDropdown ? 'block' : 'none' }}
                    className="backdrop" onClick={() => setHeadlineDropdown(false)}
                >
                </div>
            </div>

            <button
                className='searchbar__iconAction'
                style={{ display: toggleShow ? 'block' : 'none' }}
            >
                <GoSearch />
            </button>

        </div>
    )
}

export default Searchbar
