import React, { useEffect, useState } from 'react';
import {connect} from 'react-redux';
import getUsers from '../actions/userAction';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import {FaChevronRight, FaFileExport, FaThLarge, FaUsers, FaUsersCog} from 'react-icons/fa'



const Profile = ({users: {users, loading}, getUsers}) => {

    const user = useSelector((state) => state.users);

    
    var [firstName, setFirstName] = useState('');
    var [lastName, setLastName] = useState('');
    var [email, setEmail] = useState('');
    var [phone, setPhone] = useState('');
    var [company, setCompany] = useState('');
    var [phrase, setPhrase] = useState('');
    var [address, setAddress] = useState('');
    var [website, setWebsite] = useState('');

    const myUsers = users;
    
    useEffect(() => {
        getUsers();
    }, [getUsers]);

    console.log(user.users)
    if(loading || myUsers === null){
        
        return (
            <div>Loading...</div>
        )
    }
    
    
    else{
        const length = Math.floor(Math.random() * myUsers.length);
        const randImg = Math.floor(Math.random() * 5);
        console.log(user.users[length].name.split(" ")[0]);
        
        
            firstName = (user.users[length].name.split(" ")[0]);
            lastName = (user.users[length].name.split(" ")[1]);
            email = (user.users[length].email);
            phone = (user.users[length].phone.split(" ")[0]);
            company = (user.users[length].company.name);
            phrase = (user.users[length].company.catchPhrase);
            address = (user.users[length].address.city);
            website = (user.users[length].website);
        
        
        
       
        return (
          <div className='grid grid-rows-[90%_10%] md:grid-cols-5 lg:grid-cols-5 xl:grid-cols-5 2xl:grid-cols-5 sm:grid-cols-[4%_36%_20%_20%_20%] gap-0 w-screen h-full'> 
                <div className='col-start-1 row-start-1 row-span-2'>
                <div className='bg-sidebar text-3xl grid grid-cols-[20%_60%_20%] grid-rows-[5%_25%_20%_50%] gap-2 content-center items-center justify-items-center h-screen'> 
                    <div className='mt-32 items-center py-4 rounded-xl mb-20 row-start-2 col-start-2 sm:hidden'>
                            <img alt="Member" src={`https://source.unsplash.com/random/300x200?sig=${randImg}`} className='  rounded-full h-[8rem] w-[8rem] md:h-[6rem] md:w-[6rem]' />
                            <div className='text-sm text-white text-center xl:text-lg 2xl:text-xl font-semibold'>User ID: 2346224 </div>
                        </div>
                        <div className='row-start-3 col-start-1 col-span-3 sm:hidden text-left w-full mt-16'>
                             <div className='text-[0.9rem] lg:text-[0.7rem] md:text-[0.55rem] text-white grid grid-cols-[20%_60%_20%] p-5 hover:bg-navbar active:delay-150 hover:delay-150 hover:mx-5 hover:rounded-2xl active:bg-navbar active:mx-5 active:rounded-2xl'>
                                <div className='text-sideIcon text-[1.5rem] pt-1'>
                                    <FaThLarge />
                                </div>
                                <div className='text-ellipsis overflow-hidden whitespace-nowrap '>
                                    Dashboard
                                </div >
                                <div className='text-[0.7rem] m-3'><FaChevronRight /></div>
                            </div>
                            <div className='text-[0.9rem] lg:text-[0.7rem] md:text-[0.55rem] text-white grid grid-cols-[20%_60%_20%] p-5 hover:bg-navbar active:delay-150 hover:delay-150 hover:mx-5 hover:rounded-2xl active:bg-navbar active:mx-5 active:rounded-2xl'>
                                <div className='text-sideIcon text-[1.5rem] pt-1'>
                                    <FaUsers />
                                </div>
                                <div className='text-ellipsis overflow-hidden whitespace-nowrap '>
                                    Members
                                </div >
                                <div className='text-[0.7rem] m-3'><FaChevronRight /></div>
                            </div>
                        </div>
                         <div className='row-start-4 col-start-1 col-span-3 sm:hidden text-left w-full text-[0.9rem] -mt-48'>
                             <div className=' text-[0.9rem] lg:text-[0.7rem] md:text-[0.55rem] text-white grid grid-cols-[20%_60%_20%] p-5 hover:bg-navbar active:delay-150 hover:delay-150 hover:mx-5 hover:rounded-2xl active:bg-navbar active:mx-5 active:rounded-2xl'>
                                <div className='text-sideIcon text-[1.5rem] pt-1'>
                                    <FaUsersCog  />
                                </div>
                                <div className='text-ellipsis overflow-hidden whitespace-nowrap '>
                                    Profiles (Members)
                                </div >
                                <div className='text-[0.7rem] m-3'><FaChevronRight /></div>
                            </div>
                            <div className='text-[0.9rem] lg:text-[0.7rem] md:text-[0.55rem] text-white grid grid-cols-[20%_60%_20%] p-5 hover:bg-navbar active:delay-150 hover:delay-150 hover:mx-5 hover:rounded-2xl active:bg-navbar active:mx-5 active:rounded-2xl'>
                                <div className='text-sideIcon text-[1.5rem] pt-1'>
                                    <FaFileExport />
                                </div>
                                <div className='text-ellipsis overflow-hidden whitespace-nowrap '>
                                    Generate Report
                                </div >
                                <div className='text-[0.7rem] m-3'><FaChevronRight /></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-start-2 col-span-4 grid grid-rows-[10%_90%] gap-6 h-full w-full  row-start-1 '>
                <div className='bg-profile row-start-1 text-center text-white text-2xl font-bold pt-8'>
                    PROFILE SETTINGS
                </div>
                <div className='row-start-2 grid grid-cols-[70%_25%_5%] grid-rows-[5%_95%] gap-2 p'>
                    <div className='grid grid-rows-[10%_20%_65%_5%] sm:grid-rows-[15%_15%_55%_15%] row-start-1 row-span-2 col-start-1 border-b-2 rounded-br-sm rounded-tr-sm shadow-2xl h-full w-full items-center '>
                        <h3 className=' text-4xl font-semibold my-10 sm:my-5 mx-10 sm:text-xl'>
                            General Information
                        </h3>
                        <div className='border border-inputBorder px-10 py-1 lg:h-[8.8rem] lg:w-[90%] xl:[8.8rem] xl:w-[90%] 2xl:h-[8.8rem] 2xl:w-[90%] md:w-[80%] md:h-[6.7rem] md:px-4  sm:w-[80%] sm:h-[5.5rem] sm:px-2  rounded-xl mx-10'>
                            <img alt="Member" src={`https://source.unsplash.com/random/300x200?sig=${randImg}`} className='  rounded-full border-4 border-blue-400 p-1 md:w-[6.2rem] md:h-[6.2rem] sm:w-[5rem] sm:h-[5rem] lg:h-[8.3rem] lg:w-[8.3rem] xl:h-[8.3rem] xl:w-[8.3rem] 2xl:h-[8.3rem] 2xl:w-[8.3rem] ' />
                        </div>
                        

                        <form className='grid grid-rows-6 items-center my-2 text-[14px] h-full mx-10 mt-10'>
                            <div className=' grid grid-cols-2 gap-4 pb-1'>
                                <div >
                                    <label htmlFor="firstname" className='block pb-1 sm:text-[0.7rem]'>First name</label>
                                    <input type="text" id="fname" value={firstName} name="fname" className='mr-10 border border-inputBorder bg-gray-200 rounded-md focus:outline-none px-2 text-inputField w-full h-[2.5rem] sm:h-[1.5rem] sm:text-[0.7rem] sm:px-1 md:h-[2rem]' />
                                </div>
                                <div>
                                    <label htmlFor="lastname" className='block pb-1 sm:text-[0.7rem]'>Last name</label>
                                    <input type="text" id="lname" value={lastName} name="lname" className='mr-10 border border-inputBorder bg-gray-200 rounded-md focus:outline-none px-2 text-inputField w-full h-[2.5rem] sm:h-[1.5rem] sm:text-[0.7rem] sm:px-1 md:h-[2rem]'/>
                                </div>
                            </div>
                            <div className=' grid grid-cols-2 gap-4 pb-1'>
                                <div>
                                    <label htmlFor="email" className='block pb-1 sm:text-[0.7rem]'>Email</label>
                                    <input type="email" id="email" value={email} name="email" className='mr-10mr-10 border border-inputBorder bg-gray-200 rounded-md focus:outline-none px-2 text-inputField w-full h-[2.5rem] sm:h-[1.5rem] sm:text-[0.7rem] sm:px-1 md:h-[2rem]' />
                                </div>
                                <div>
                                    <label htmlFor="phone" className='block pb-1 sm:text-[0.7rem]'>Phone</label>
                                    <input type="phone" id="phone" value={phone} name="phone" className='mr-10 border border-inputBorder bg-gray-200 rounded-md focus:outline-none px-2 text-inputField w-full h-[2.5rem] sm:h-[1.5rem] sm:text-[0.7rem] sm:px-1 md:h-[2rem]'/>
                                </div>
                            </div>
                            <div className=' grid grid-cols-2 gap-4 pb-1'>
                                <div>
                                    <label htmlFor="company" className='block pb-1 sm:text-[0.7rem]'>Company Name</label>
                                    <input type="text" id="company" value={company} name="company" className='mr-10mr-10 border border-inputBorder bg-gray-200 rounded-md focus:outline-none px-2 text-inputField w-full h-[2.5rem] sm:h-[1.5rem] sm:text-[0.7rem] sm:px-1 md:h-[2rem]' />
                                </div>
                                <div>
                                    <label htmlFor="phrase" className='block pb-1 sm:text-[0.7rem]'>Company Catch-phrase</label>
                                    <input type="text" id="phrase" value={phrase} name="phrase" className='mr-10 border border-inputBorder bg-gray-200 rounded-md focus:outline-none px-2 text-inputField w-full h-[2.5rem] sm:h-[1.5rem] sm:text-[0.7rem] sm:px-1 md:h-[2rem] px-4 md:px-1 sm:px'/>
                                </div>
                            </div>
                            <div className=' grid grid-cols-2 gap-4 pb-1'>
                                <div>
                                    <label htmlFor="address" className='block pb-1 sm:text-[0.7rem]'>Address Name</label>
                                    <input type="text" id="address" value={address} name="address" className='mr-10mr-10 border border-inputBorder bg-gray-200 rounded-md focus:outline-none px-2 text-inputField w-full h-[2.5rem] sm:h-[1.5rem] sm:text-[0.7rem] sm:px-1 md:h-[2rem]'  />
                                </div>
                                <div>
                                    <label htmlFor="website" className='block pb-1 sm:text-[0.7rem]'>Website</label>
                                    <input type="text" id="website" value={website} name="website" className='border border-inputBorder bg-gray-200 rounded-md focus:outline-none text-inputField w-full h-[2.5rem] sm:h-[1.5rem] md:h-[2rem]'/>
                                </div>
                            </div>
                            <div className=' grid grid-cols-2 gap-4 pb-1'>
                                <div>
                                    <label htmlFor="password" className='block pb-1 sm:text-[0.7rem]'>Change Password</label>
                                    <input type="password" id="password" name="password" className='mr-10mr-10 border border-inputBorder bg-gray-200 rounded-md focus:outline-none px-2 text-inputField w-full h-[2.5rem] sm:h-[1.5rem] sm:text-[0.7rem] sm:px-1 md:h-[2rem]' />
                                </div>
                                <div>
                                    <label htmlFor="new_password" className='block pb-1 sm:text-[0.7rem]'>Enter New Password</label>
                                    <input type="password"  id="new_password" name="new_password" className='mr-10 border border-inputBorder bg-gray-200 rounded-md focus:outline-none px-2 text-inputField w-full h-[2.5rem] sm:h-[1.5rem] sm:text-[0.7rem] sm:px-1 md:h-[2rem]' />
                                </div>
                            </div>
                            <div className='mb-5 grid grid-cols-6 gap-4 pb-1'>
                                <button type='submit' className=' bg-green-500 w-full rounded-md text-center text-md text-white mr-10 sm:col-span-2 '> Update </button>
                                <button type='submit' className=' py-2 bg-red-500 w-full rounded-md text-md text-white text-center mr-10 col-start-2 col-span-1 sm:col-span-2'>Cancel</button>  
                            </div>
                            
                        </form>

                    </div>
                    
                    <div className='grid grid-rows-[35%_30%_35%] gap-2 row-start-2 col-start-2 text-center border-2 rounded-2xl h-[100%] shadow-2xl '>
                            <div className='ml-5 border-b border-slate-300 grid grid-rows-[20%_10%_50%_20%] gap-0 pr-8 mt-5 '>
                            <h3 className='sm:text-[0.7rem] md:text-[0.9rem] lg:text-[1rem] xl:text-[1.3rem] 2xl:text-[1.3rem]  font-bold text-left '>Upcoming Events</h3>
                                <div  className='grid grid-cols-[20%_70%_10%] gap-1'>
                                    <div className='bg-inputBorder h-[1.9rem] lg:h-[2.5rem] xl:h-[3rem] 2xl:h-[3rem]   w-full rounded-2xl block'>
                                        
                                    </div>
                                    <div className='sm:text-[0.5rem] md:text-[0.6rem] lg:text-[0.8rem] xl:text-[0.9rem] 2xl:text-[0.9rem] grid grid-rows-2 p-0 gap-0'>
                                        <div className='text-ellipsis overflow-hidden whitespace-nowrap  font-semibold'>
                                            Workers Monthly Work Meeting
                                        </div>
                                        
                                        <div className='sm:text-[0.4rem] md:text-[0.6rem] lg:text-[0.8rem] xl:text-[0.8rem] 2xl:text-[0.8rem] text-inputBorder text-left p-0'>
                                            10h to go
                                        </div>
                                    </div>
                                    <div className='text-inputBorder text-center justify-center'>
                                        <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16" className='sm:w-[1.2rem] md:w-[1.5rem] lg:w-[2rem] xl:w-[2.1rem] 2xl:w-[2.1rem]'>
                                            <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                                        </svg>
                                    </div>
                                </div>
                                <div className='mt-7 '>
                                    <h3 className='sm:text-[0.5rem] md:text-[0.6rem] md:pt-1 lg:text-[0.8rem] lg:pt-2 font-bold xl:text-[0.9rem] 2xl:text-[0.9rem] xl:pt-2 2xl:pt-2'>
                                        Lorem ipsum dolor sit amet
                                    </h3>
                                    <div className='sm:text-[0.3rem] md:text-[0.4rem] lg:text-[0.5rem] xl:text-[0.7rem] 2xl:text-[0.7rem] text- text-justify'>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt odio nobis labore
                                    </div>
                                </div>
                                <div className='bg-eventText/[0.15] h-[1.5rem] w-[2.5rem] rounded-lg block text-center text-eventText p-1 md:text-[0.7rem] sm:text-[0.7rem] lg:text-[0.8rem] xl:text-[0.9rem] xl:p-0 2xl:p-0 2xl:text-[0.9rem] mt-2'>
                                    HQ
                                </div>


                            </div>
                            <div className='ml-5 border-b border-slate-300 grid grid-rows-[15%_50%_35%] gap-0 pr-8 mt-5 '>
                                
                                <div  className='grid grid-cols-[20%_70%_10%] gap-1'>
                                    <div className='bg-inputBorder h-[1.9rem] lg:h-[2.5rem] xl:h-[3rem] 2xl:h-[3rem]   w-full rounded-2xl block'>
                                        
                                    </div>
                                    <div className='sm:text-[0.5rem] md:text-[0.6rem] lg:text-[0.8rem] xl:text-[0.9rem] 2xl:text-[0.9rem] grid grid-rows-2 p-0 gap-0'>
                                        <div className='text-ellipsis overflow-hidden whitespace-nowrap  font-semibold text-left'>
                                            Praise Vigil August
                                        </div>
                                        
                                        <div className='sm:text-[0.4rem] md:text-[0.6rem] lg:text-[0.8rem] xl:text-[0.8rem] 2xl:text-[0.8rem] text-inputBorder text-left p-0'>
                                            2weeks to go
                                        </div>
                                    </div>
                                    <div className='text-inputBorder text-center justify-center'>
                                        <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16" className='sm:w-[1.2rem] md:w-[1.5rem] lg:w-[2rem] xl:w-[2.1rem] 2xl:w-[2.1rem]'>
                                            <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                                        </svg>
                                    </div>
                                </div>
                                <div className='mt-7 '>
                                    <h3 className='sm:text-[0.5rem] md:text-[0.6rem] md:pt-1 lg:text-[0.8rem] lg:pt-2 font-bold xl:text-[0.9rem] 2xl:text-[0.9rem] xl:pt-1 2xl:pt-1'>
                                        Lorem ipsum dolor sit amet
                                    </h3>
                                    <div className='sm:text-[0.3rem] md:text-[0.4rem] lg:text-[0.5rem] xl:text-[0.7rem] 2xl:text-[0.7rem] text- text-justify'>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt odio nobis labore
                                    </div>
                                </div>
                                <div className=' bg-annText/[0.15] h-[1.8rem] w-[3.5rem] rounded-lg block text-center text-annText p-1 md:text-[0.8rem] sm:text-[0.8rem] lg:text-[0.9rem] xl:text-[1rem] 2 xl:p-0 2xl:p-0 2xl:text-[1rem] mt-6'>
                                 Ikeja
                                </div>
                            </div>
                            <div className='ml-5  grid grid-rows-[20%_10%_50%_20%] gap-0 pr-8  '>
                                <h3 className='sm:text-[0.7rem] md:text-[0.9rem] lg:text-[1rem] xl:text-[1.3rem] 2xl:text-[1.3rem]  font-bold text-left '>Announcement</h3>
                                <div  className='grid grid-cols-[20%_70%_10%] gap-1'>
                                    <div className='bg-inputBorder h-[1.9rem] lg:h-[2.5rem] xl:h-[3rem] 2xl:h-[3rem]   w-full rounded-2xl block'>
                                        
                                    </div>
                                    <div className='sm:text-[0.5rem] md:text-[0.6rem] lg:text-[0.8rem] xl:text-[0.9rem] 2xl:text-[0.9rem] grid grid-rows-2 p-0 gap-0'>
                                        <div className='text-ellipsis overflow-hidden whitespace-nowrap  font-semibold'>
                                            SGR Monthly Workshop Meeting
                                        </div>
                                        
                                        <div className='sm:text-[0.4rem] md:text-[0.6rem] lg:text-[0.8rem] xl:text-[0.8rem] 2xl:text-[0.8rem] text-inputBorder text-left p-0'>
                                            10h to go
                                        </div>
                                    </div>
                                    <div className='text-inputBorder text-center justify-center'>
                                        <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16" className='sm:w-[1.2rem] md:w-[1.5rem] lg:w-[2rem] xl:w-[2.1rem] 2xl:w-[2.1rem]'>
                                            <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                                        </svg>
                                    </div>
                                </div>
                                <div className='mt-7 '>
                                    <h3 className='sm:text-[0.5rem] md:text-[0.6rem] md:pt-1 lg:text-[0.8rem] lg:pt-2 font-bold xl:text-[0.9rem] 2xl:text-[0.9rem] xl:pt-2 2xl:pt-2'>
                                        Lorem ipsum dolor sit amet
                                    </h3>
                                    <div className='sm:text-[0.3rem] md:text-[0.4rem] lg:text-[0.5rem] xl:text-[0.7rem] 2xl:text-[0.7rem] text- text-justify'>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt odio nobis labore
                                    </div>
                                </div>
                                <div className='bg-annmtText/[0.15] h-[1.5rem] w-[2.5rem] rounded-lg block text-center text-annmtText p-1 md:text-[0.7rem] sm:text-[0.7rem] lg:text-[0.8rem] xl:text-[0.9rem] xl:p-0 2xl:p-0 2xl:text-[0.9rem]'>
                                    HQ
                                </div>


                            </div>
                    </div>
                </div>
            </div>
          </div>

        );
    }
}

Profile.propTypes = {
    getUsers: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => {
    return {
        users: state.users
    }
}
export default connect(mapStateToProps, {getUsers})(Profile);