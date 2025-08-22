import { useEffect } from 'react';

const usePageMetadata = ({ title, description }) => {
  useEffect(() => {
    document.title = title;

    let metaDescriptionTag = document.querySelector('meta[name="description"]');
    if (!metaDescriptionTag) {
      metaDescriptionTag = document.createElement('meta');
      metaDescriptionTag.setAttribute('name', 'description');
      document.head.appendChild(metaDescriptionTag);
    }
    metaDescriptionTag.setAttribute('content', description);

    // Clean up function to reset title/description if component unmounts
    return () => {
      // Optionally reset to a default or previous state if needed
      // For now, we'll leave the last set title/description as is
    };
  }, [title, description]);
};

export default usePageMetadata;