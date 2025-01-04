function CourseCard({ course, onEnroll }) {
    return (
        <div className="course-card bg-white" data-name="course-card">
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
                <p className="text-gray-600 mb-2" data-name="course-description">
                    {course.description}
                </p>
                <div className="text-sm text-gray-500 mb-2">
                    Duração: {course.duration}
                </div>
                <div className="flex justify-between items-center">
                    <span className="text-lg font-bold" data-name="course-price">
                        {course.price}
                    </span>
                    <button
                        onClick={() => onEnroll(course)}
                        className="enroll-button"
                        data-name="enroll-button"
                    >
                        Inscreva-se
                    </button>
                </div>
            </div>
        </div>
    );
}
