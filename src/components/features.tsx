export default function Features() {
    const features = [
        {
            title: "Feature 1",
            description: "This is the description for feature 1.",
        },
        {
            title: "Feature 2",
            description: "This is the description for feature 2.",
        },
        {
            title: "Feature 3",
            description: "This is the description for feature 3.",
        },
    ];

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900">
            <div className="container mx-auto">
                <div className="w-full flex flex-col items-center justify-center space-y-10 py-20">
                    {/* Section Title */}
                    <div className="flex flex-col items-center justify-center space-y-2">
                        <h1 className="text-4xl font-bold text-center text-white">
                            Problems We Solve
                        </h1>
                        <p className="text-center text-gray-400">
                            We solve the following problems for you.
                        </p>
                    </div>
                    {/* Features Section */}
                    <div className="flex flex-col md:flex-row items-start justify-center gap-5">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="flex-1 flex flex-col items-center justify-start group space-y-2"
                            >
                                <h2 className="text-lg font-bold mb-2">{feature.title}</h2>
                                <p className="text-gray-400">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
