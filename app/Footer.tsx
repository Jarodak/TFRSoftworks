"use client";

export default function Footer() {
  return (
    <footer style={{padding:'1rem 2rem',background:'#f4f8fb',borderTop:'1px solid #e3e3e3',textAlign:'center',color:'#888',fontSize:'0.95rem'}}>
      &copy; {new Date().getFullYear()} TFR Softworks. All rights reserved.
    </footer>
  );
}
