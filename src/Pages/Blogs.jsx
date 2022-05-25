import React from 'react';

const Blogs = () => {
    return (
        <section className="text-gray-600 body-font  mt-28">
        <div className="container px-5 py-24 mx-auto">
            <div className="-my-8 divide-y-2 divide-gray-100">
            <div className="py-8 flex flex-wrap md:flex-nowrap">
                <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span className="font-semibold title-font text-gray-700">CATEGORY</span>
                <span className="mt-1 text-gray-500 text-sm">25 5 2022</span>
                </div>
                <div className="md:flex-grow">
                <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">How will improve the performance of a React Application</h2>
                <p className="leading-relaxed">   
                1. We shouuld keep component state local where necessary. <br/>
                2. We have to memoizing React components to prevent unnecessary re-renders. <br/>
                3. Another great way is to Code-splitting in React using dynamic import() <br/>
                4. In React, function components and PureComponent provide two different ways of optimizing React apps at the component level. <br/>
                5. Lazy loading images in React.                4. In React, function components and PureComponent provide two different ways of optimizing React apps at the component level. <br/>

                6. We should use React Fragments
                </p>

                </div>
            </div>
            <div className="py-8 flex flex-wrap md:flex-nowrap">
                <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span className="font-semibold title-font text-gray-700">CATEGORY</span>
                <span className="mt-1 text-gray-500 text-sm">12 Jun 2019</span>
                </div>
                <div className="md:flex-grow">
                <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">What are the different ways to manage a state in a React application?</h2>
                <p className="leading-relaxed">   
                There are four main types of state you need to properly manage in your React apps:
                1. Local state  <br/>
                2. Global state  <br/>
                3. Server state <br/>
                4. URL state
                 <br/>
                 Local state: In Local state is managed in React using the useState hook <br/>
                 Global state : Global state is data we manage across multiple components. <br/>
                 Server state : In server state Data  comes from an external server that must be integrated with our UI state. <br/>
                 URL state : In url state Data that exists on our URLs, including the pathname and query parameters. <br/>

           
                </p>

                </div>
            </div>
            <div className="py-8 flex flex-wrap md:flex-nowrap">
                <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span className="font-semibold title-font text-gray-700">CATEGORY</span>
                <span className="text-sm text-gray-500">12 Jun 2019</span>
                </div>
                <div className="md:flex-grow">
                <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">What is a unit test? Why should write unit tests?</h2>
                <p className="leading-relaxed">UNIT TESTING is a type of software testing where individual units or components of a software are tested. <br/>
                There are two types of unit testing:<br/></p>
                1. Manual <br/>
                2. Automated <br/>
                Unit testing helps developers to write better code and detect errors faster. Here are eight reasons you should be writing unit tests. Unit tests save time and money. Well-written unit tests act as documentation for your code. · It simplifies the debugging process.
                </div>
            </div>
            <div className="py-8 flex flex-wrap md:flex-nowrap">
                <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span className="font-semibold title-font text-gray-700">CATEGORY</span>
                <span className="text-sm text-gray-500">12 Jun 2019</span>
                </div>
                <div className="md:flex-grow">
                <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h2>
                <p className="leading-relaxed">
                        <pre> {`
                let products = [
                    {name: 'Computer', price: 50000,description:'Des 1'},
                    {name: 'Table', price: 1500,description:'Des 1'},
                    {name: 'Laptop', price: 36950,description:'Des 1'},
                    {name: 'Phone', price: 20000,description:'Des 1'},
    
                ];

                console.log(products.filter(product=>product.name==='Computer'))

            `} </pre>
                </p>
                </div> 
            </div>
            <div className="py-8 flex flex-wrap md:flex-nowrap">
                <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span className="font-semibold title-font text-gray-700">CATEGORY</span>
                <span className="text-sm text-gray-500">12 Jun 2019</span>
                </div>
                <div className="md:flex-grow">
                <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">How does prototypical inheritance work?</h2>
                <p className="leading-relaxed">Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts <br/>
                UseState is a react Hook. Which is use to manage state for react functional component. Here, we are destructuring the returned values from useState. The first value, products, is our current state.The second value, setProducts, is the function that is used to update our state. products = [...] is not is not allowed. To store data we have to use setProducts</p>
                </div> 
            </div>
            </div>
        </div>
        </section>

    );
};

export default Blogs;