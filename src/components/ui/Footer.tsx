export default function Footer() {
    return (
        <footer className="w-full text-center py-4 bg-gray-100 border-t text-gray-600 text-sm z-20">
            &copy; {new Date().getFullYear()} Candidate Space. All rights reserved.
        </footer>
    );
}