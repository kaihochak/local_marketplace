"use client"

import CommonHeader from "@/components/shared/CommonHeader";
import dummmyRatingReviews from "@/constants/dummyReviews";
import dummyUsers from "@/constants/dummyUsers";
import React, { useState } from "react";
import Slider from '@mui/material/Slider';

const MyReview = () => {
    const user = dummyUsers[0];
    const reviews = dummmyRatingReviews.filter(review => review.clientID === user._id);

    // State for editable ratings
    const [rating, setRating] = useState(reviews[0].rating);

    const handleRatingChange = (event: Event, newValue: number | number[]) => {
        setRating(newValue as number);
    };

    const [reviewText, setReviewText] = useState(reviews[0].review);

    // Marks for the rating slider
    const marks = [
        { value: 1, label: '1⭐' },
        { value: 2, label: '2⭐' },
        { value: 3, label: '3⭐' },
        { value: 4, label: '4⭐' },
        { value: 5, label: '5⭐' }
    ];

    return (
        <div>
            <CommonHeader title='Edit Review' />
            {/* Print review information */}
            <div className="mx-6">
                {/* Service Image */}
                <div className="border border-gray-200 rounded-lg overflow-hidden h-[210px] relative">
                    <img className="w-full h-full object-cover" src={reviews[0].service.imageURL ?? ''} alt={reviews[0].service.imageURL ?? ''} />
                </div>
                {/* Service Title and Provider */}
                <div className="my-4">
                    {/* Link to the service page */}
                    <h1 className="text-2xl font-bold">{reviews[0].service.title}</h1>
                    <div className="flex items-center">
                        <img className="w-5 h-5 rounded-full mr-2" src={user.imageURL} alt="Profile" />
                        <h2 className="text-lg">{reviews[0].service.provider}</h2>
                    </div>
                </div>
                {/* Edit Rating Using Slider */}
                <div>
                    <h3 className="font-medium pb-3">Rating</h3>
                    {/* Display current rating */}
                    <p>{rating}</p>
                    {/* Slider for editing rating */}
                    <div className="mx-2">
                        <Slider
                            aria-label="Custom marks"
                            defaultValue={reviews[0].rating}
                            value={rating}
                            onChange={handleRatingChange}
                            step={1}
                            valueLabelDisplay="auto"
                            marks={marks}
                            min={1}
                            max={5}
                            sx={{
                                color: 'black', // Set the color to black
                                '& .MuiSlider-track': {
                                    color: 'black', // Set the track color to black
                                },
                                '& .MuiSlider-rail': {
                                    color: 'black', // Set the rail color to black
                                },
                                '& .MuiSlider-thumb': {
                                    color: 'black', // Set the thumb color to black
                                },
                            }}
                        />
                    </div>
                </div>
                {/* Edit Review Section */}
                <div>
                    <h3 className="font-medium pb-3">Review</h3>
                    {/* Use state for textarea value */}
                    <textarea
                        value={reviewText}
                        onChange={(e) => setReviewText(e.target.value)}
                        className="w-full h-40 px-4 py-2 border border-gray-300 rounded-md resize-none"
                    />
                </div>
                {/* Edit review Button */}
                <div className="flex justify-center items-center mt-2 mb-5">
                    <button className="px-4 py-4 border border-black rounded-md bg-black text-white w-full">
                        Edit Review
                    </button>
                </div>
            </div>
        </div>
    )
}

export default MyReview;
