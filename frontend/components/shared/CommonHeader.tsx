"use client"

const CommonHeader = ({ title }: { title: string }) => {
    const goBack = () => {
        if (typeof window !== 'undefined') {
            window.history.back();
        }
    };

    return (
        <section className='w-full bg-primary sticky top-0 z-50'>
        <div className='flex justify-between items-center px-6 py-4'>
            <button onClick={goBack} className='text-white text-lg font-semibold'>Back</button>
            <h2 className='text-primary-foreground text-lg font-semibold absolute left-1/2 transform -translate-x-1/2'>{title}</h2>
            <div></div> {/* This is a temporary fix for the sticky header */}
        </div>
    </section>

    );
};

export default CommonHeader;
