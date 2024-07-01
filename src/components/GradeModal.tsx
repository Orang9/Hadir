type Grade = {
  name: string;
  grade: number;
};

type GradeModalProps = {
  isOpen: boolean;
  onClose: () => void;
  grades: Grade[];
};

export default function GradeModal({ isOpen, onClose, grades }: GradeModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-4 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Average Individual Grades</h2>
        <ul>
          {grades.map((grade, index) => (
            <li key={index} className="mb-2">
              <div className="flex justify-between">
                <span>{grade.name}</span>
                <span>{grade.grade}</span>
              </div>
            </li>
          ))}
        </ul>
        <button
          onClick={onClose}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
}
