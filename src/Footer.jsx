export default function Footer() {
    return (
        <footer className="text-center py-2 mt-4" style={{ fontSize: "0.85rem", opacity: 0.7, background: "#fff" }}>
            © {new Date().getFullYear()} polit-orientation · Alle Rechte vorbehalten
        </footer>
    );
}
