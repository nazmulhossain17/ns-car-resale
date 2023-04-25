import React from 'react';

const Testimonial = () => {
    return (
        <>
            <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
  <div className="max-w-6xl mx-auto">
    <div className="lg:text-center">
      <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">OUR TEAM</h2>
      <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
        Meet our talented team members
      </p>
      <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in libero eget enim consectetur consequat. 
        Suspendisse potenti. Fusce fringilla dui vel dolor eleifend, eu tincidunt sapien facilisis.
      </p>
    </div>
    <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg">
        <img className="h-48 w-full object-cover object-center" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bWVufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="Team member 1"/>
        <div className="p-6">
          <h3 className="text-lg font-medium text-gray-900">John Doe</h3>
          <p className="mt-2 text-gray-600"> Product Designer</p>
        </div>
      </div>
      <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg">
        <img className="h-48 w-full object-cover object-center" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="Team member 2"/>
        <div className="p-6">
          <h3 className="text-lg font-medium text-gray-900">Jane Smith</h3>
          <p className="mt-2 text-gray-600">Marketing Director</p>
        </div>
      </div>
      <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg">
        <img className="h-48 w-full object-cover object-center" src="https://images.unsplash.com/photo-1453396450673-3fe83d2db2c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="Team member 3"/>
        <div className="p-6">
          <h3 className="text-lg font-medium text-gray-900">Mark Johnson</h3>
          <p className="mt-2 text-gray-600">Lead Developer</p>
        </div>
      </div>
    </div>
  </div>
</div>

        </>
    );
};

export default Testimonial;