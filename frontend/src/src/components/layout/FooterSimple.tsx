import React from 'react';

/**
 * Simple footer component migrated from `footersimple.jsp`.
 * Preserves original markup, classes, and content while applying
 * the modern design system wrappers (`.modern-container`, `.modern-card`).
 */
const FooterSimple: React.FC = () => (
  <div className="modern-container modern-card container-fluid p-1 my-bg-color text-center text-white mt-3">
    <p className="fs-4 text-center">&copy; md.talal.wasim</p>
  </div>
);

export default FooterSimple;