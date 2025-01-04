function Courses({ navigateTo }) {
    const handleCourseClick = (course) => {
        try {
            navigateTo(`/curso/${course.id}`, { course });
        } catch (error) {
            reportError(error);
        }
    };

    return (
        <div className="container mx-auto px-4 py-8" data-name="courses-page">
            <h1 className="text-3xl font-bold mb-8">Nossos Cursos</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {courses.map(course => (
                    <div 
                        key={course.id} 
                        className="course-card bg-white cursor-pointer"
                        onClick={() => handleCourseClick(course)}
                        data-name="course-card"
                    >
                        <img 
                            src={course.image} 
                            alt={course.name}
                            className="course-image"
                            data-name="course-image"
                        />
                        <div className="p-4">
                            <h3 className="text-xl font-semibold mb-2" data-name="course-name">
                                {course.name}
                            </h3>
                            <p className="text-gray-600 mb-2" data-name="course-duration">
                                Duração: {course.duration}
                            </p>
                            <span className="text-lg font-bold text-green-600" data-name="course-price">
                                {course.price}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
