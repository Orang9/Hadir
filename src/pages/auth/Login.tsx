import signup from './signup.jpg';

export default function Login() {
    return(
        <>
        <body className="h-screen text-base leading-8 text-gray-700 bg-gray-200 font-normal">
            <div className=" py-32">
                <section className="">
                    <div className="w-max bg-white mx-auto shadow rounded-lg">
                        <div className="flex p-5">
                            <div className="max-w-full h-auto">
                            <figure><img src={signup}/></figure>
                            </div>

                            <div className="w-1/2 overflow-hidden ml-20 mr-36">
                                <h2 className="mb-8 font-bold">Sign Up</h2>
                                <form method="POST" className="w-full" id="login-form">
                                    <div className="relative mb-6 border-b-4 last:mb-0">
                                        <label htmlFor="your_email"></label>
                                        <input type="text" name="your_email" id="your_email" placeholder="Your Email" className='focus:outline-none'/>
                                    </div>
                                    <div className="relative mb-6 border-b-4 last:mb-0">
                                        <label htmlFor="your_password"></label>
                                        <input type="text" name="your_password" id="your_password" placeholder="Your Password" className='focus:outline-none'/>
                                    </div>
                                    <div className="relative mb-6 last:mb-0">
                                        <input type="checkbox" name="remeber_me" id="remember_me" />
                                        <label htmlFor="remeber_me">Remember me</label>
                                    </div>
                                    <div className="relative mb-6 last:mb-0 text-center">
                                        <input type="submit" name="signin" id="signin" className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-6" value="Log in" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </body>
        </>
    )
}