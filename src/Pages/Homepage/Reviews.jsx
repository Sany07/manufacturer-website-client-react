import React, {useState, useEffect} from 'react';

const Reviews = ()=> {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    console.log("s");
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
    return (
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className='text-center'>
                      <h3 className='text-primary pb-28  text-xl font-bold uppercase'>What our Client Says</h3>
                  </div>
                  <div className="flex flex-wrap -m-4">
                      {reviews.map((review, index) => (
                          <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                              <p className="leading-relaxed mb-5"> {review.review}
                              </p>

                              <strong> Rating: {review.rating}</strong> 
                              
                              
                              <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm my-5">
                                {review.name}
                                </h2>
                            </div>
                          </div>
                    ))}
                   </div>
        </div>
      </section>
    );
};

export default Reviews;