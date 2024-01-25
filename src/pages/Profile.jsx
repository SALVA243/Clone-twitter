import React from 'react';

function Profile(props) {
    return (
        <div>
            <h2 className='flex justify-between border border-gray-300 py-3 px-3'>Profile</h2>
            <div className='border-solid border  relative'>
                <div className='border-solid border  bg-slate-300 h-60'></div>
                <div className='border-solid border bg-white h-60'></div>
                <div className='absolute top-36 flex justify-between items-center w-full px-6'>
                    <img className='h-40 left-3 size-18 rounded-full' src="src/images/Profile-Photo2.svg" alt="" />
                    <span className='bg-transparent h-9 rounded-full text-black border-solid border w-28 hover:bg-gray-200 mt-24'>Edit Profile</span>
                </div>
                <div className=' h-40 w-60 absolute top-80 ms-4 grid grid-cols-1 '>
                    <div>
                        <span className='block' ><strong>Salva LUPETA</strong></span>
                        <span className='text-slate-400'>@Salva LUPETA</span>
                    </div>
                    <div>
                        <div className='flex justify-between ms'>
                            <img src="src/images/calendrier.svg" alt="" />
                            <span>joinded</span>
                            <span>January</span>
                            <span>2024</span>
                        </div>
                        <div>
                            <div>
                                <span><strong>0</strong></span>
                                <span>Following</span>
                            </div>
                            <div>
                                <span><strong>0</strong></span>
                                <span>Followers</span>
                            </div>
                        </div>
                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </div>
    );
}
export default Profile;