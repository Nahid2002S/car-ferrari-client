import React from 'react';

const Gallary = () => {
    return (
        <div>
            <h1 className='font-extrabold text-3xl text-center mb-4 mt-12'>Photo Gallary</h1>
            <div className='lg:grid grid-cols-4 gap-2 mt-6 lg:px-32 px-2'>
                <div className='border-4 border-indigo-800 rounded-md mb-2 lg:mb-0'><img src="https://img.freepik.com/free-photo/closeup-shot-small-toy-car-wooden-train-track_181624-32510.jpg?w=740&t=st=1684486128~exp=1684486728~hmac=4e2762f3d88555d50f5d1b17310ca6a2635d4c4a34c6329c600106c0ad092078" alt="" /></div>
                <div className='border-4 border-indigo-800 rounded-md mb-2 lg:mb-0'><img src="https://img.freepik.com/free-photo/closeup-orange-wooden-toy-car-tracks-lights_181624-23893.jpg?w=740&t=st=1684486468~exp=1684487068~hmac=4ed89609f5104c6a872562ebc569437dff6e6777a66de03bf08d09d2d99eb88f" alt="" /></div>
                <div className='border-4 border-indigo-800 rounded-md mb-2 lg:mb-0'><img src="https://img.freepik.com/free-photo/business-planning-concept-side-view-forklift-truck-stacking-wooden-blocks_176474-9256.jpg?t=st=1684465203~exp=1684465803~hmac=92eea58ddb1526612a0e235ce53240e301db9c584c9acf27ce1d58e2d45fe187" alt="" /></div>
                <div className='border-4 border-indigo-800 rounded-md mb-2 lg:mb-0'><img src="https://img.freepik.com/free-photo/set-children-toys_93675-130361.jpg?w=740&t=st=1684487081~exp=1684487681~hmac=a85999255f2a8f9c9d7934d71acfa2c62f99329d8614b6718124e856239f8b20" alt="" /></div>

            </div>
            <div className='lg:grid grid-cols-3 gap-2 mt-6 lg:px-60 px-2'>
                <div className='border-4 border-indigo-800 rounded-md mb-2 lg:mb-0'><img src="https://img.freepik.com/free-photo/closeup-shot-toy-red-wooden-train-wooden-table_181624-21684.jpg?w=740&t=st=1684487289~exp=1684487889~hmac=7a9b107661f31dc69bf62379f729a408a1305ea6eda4c6172a604c30bc24ab1a" alt="" /></div>
                <div className='border-4 border-indigo-800 rounded-md mb-2 lg:mb-0'><img src="https://img.freepik.com/free-photo/vertical-selective-focus-shot-red-wagon-blue-car-placed-each-other-wooden-table_181624-32228.jpg?w=740&t=st=1684487439~exp=1684488039~hmac=5cd60b07da52e957c8136764f887aeeb58702410f9bc2c9272dc8f7870d17568" alt="" /></div>
                <div className='border-4 border-indigo-800 rounded-md'><img src="https://img.freepik.com/free-photo/close-up-toy-car-with-easter-eggs_23-2149318362.jpg?w=740&t=st=1684487539~exp=1684488139~hmac=666e70c5a1ce40fe2a3f21b56de55b0ed6993a3b937e29a67a1227524ba68b58" alt="" /></div>
            </div>
            <div className='lg:grid grid-cols-2 gap-2 mt-6 lg:px-96 px-2'>
                <div className='border-4 border-indigo-800 rounded-md mb-2 lg:mb-0'><img src="https://img.freepik.com/free-photo/close-up-toy-car-with-easter-eggs_23-2149318356.jpg?w=740&t=st=1684487714~exp=1684488314~hmac=76411f44e2c7f0a46d0bc2463354b5ad90b1946c82a1ec24079193353a23737f" alt="" /></div>
                <div className='border-4 border-indigo-800 rounded-md mb-2 lg:mb-0'><img src="https://img.freepik.com/free-photo/kindergarten-concept-with-wooden-blocks-kid-toys-wooden-grungy-background-side-view_176474-7732.jpg?w=740&t=st=1684487774~exp=1684488374~hmac=946a6db109f62fff2f72ec9b991baa68901c2ab65c4cc89d87ffd0705c2abdd3" alt="" /></div>
            </div>
        </div>
    );
};

export default Gallary;