import Link from "next/link";

const Contact = () => {
    return (
        <>
            <section
                id="contact"
                className="contact-background relative z-10 grid place-items-center min-h-screen bg-black text-white"
            >
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
                        <img className="rounded-xl border border-gray-300" src="/contact.png" alt="Contact" />
                        <div className="contactForm justify-center">
                            <div className="justify-center">
                                <h2 className="mb-12 text-3xl font-bold">Contact Us</h2>
                                <div className="">
                                    <div className="">
                                        <form className="space-y-6">
                                            <div className="relative">
                                                <input
                                                    type="text"
                                                    className="peer block w-full rounded border border-[#923c4a] bg-transparent py-2 px-3 leading-tight outline-none transition-all duration-200 ease-linear focus:border-white focus:text-white dark:text-neutral-200 dark:placeholder-gray-600"
                                                    id="exampleInput90"
                                                    placeholder="Name"
                                                />
                                                <label
                                                    className="pointer-events-none text-[#923c4a] absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] transition-all duration-200 ease-out peer-focus:-translate-y-[1.6rem] peer-focus:scale-[0.8] peer-focus:text-primary"
                                                    htmlFor="exampleInput90"
                                                >
                                                    Name
                                                </label>
                                            </div>
                                            <div className="relative">
                                                <input
                                                    type="email"
                                                    className="peer block w-full rounded border border-[#923c4a] bg-transparent py-2 px-3 leading-tight outline-none transition-all duration-200 ease-linear focus:border-white focus:text-white dark:text-neutral-200 dark:placeholder-gray-600"
                                                    id="exampleInput91"
                                                    placeholder="Email address"
                                                />
                                                <label
                                                    className="pointer-events-none text-[#923c4a] absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] transition-all duration-200 ease-out peer-focus:-translate-y-[1.6rem] peer-focus:scale-[0.8] peer-focus:text-primary"
                                                    htmlFor="exampleInput91"
                                                >
                                                    Email address
                                                </label>
                                            </div>
                                            <div className="relative">
                                                <textarea
                                                    className="peer block w-full rounded border border-[#923c4a] bg-transparent py-2 px-3 leading-tight outline-none transition-all duration-200 ease-linear focus:border-white focus:text-white dark:text-neutral-200 dark:placeholder-gray-600"
                                                    id="exampleFormControlTextarea1"
                                                    placeholder="Message"
                                                ></textarea>
                                                <label
                                                    className="pointer-events-none text-[#923c4a] absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] transition-all duration-200 ease-out peer-focus:-translate-y-[1.6rem] peer-focus:scale-[0.8] peer-focus:text-primary"
                                                    htmlFor="exampleFormControlTextarea1"
                                                >
                                                    Message
                                                </label>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <input
                                                    className="h-4 w-4 rounded border border-[#923c4a] bg-black checked:border-white checked:bg-[#923c4a] focus:ring-2 focus:ring-white"
                                                    type="checkbox"
                                                    id="exampleCheck96"
                                                />
                                                <label className="text-[#923c4a] hover:text-white" htmlFor="exampleCheck96">
                                                    Send me a copy of this message
                                                </label>
                                            </div>
                                            <button
                                                type="submit"
                                                className="w-full rounded bg-[#923c4a] px-6 py-3 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:bg-white hover:text-[#923c4a] focus:bg-white focus:text-[#923c4a] focus:outline-none focus:ring-2 focus:ring-white active:bg-[#923c4a] active:text-white"
                                            >
                                                Send
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;
