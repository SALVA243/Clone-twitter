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
                    <button className='bg-transparent h-9 rounded-full text-black border-solid border w-28 hover:bg-gray-200 mt-24'>Edit Profile</button>
                </div>
            </div>
        </div>
    );
}
export default Profile;