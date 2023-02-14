import React from 'react';

const useMedia = (media) => {
  const [match, setMatch] = React.useState(null);
  let text;
  React.useEffect(() => {
    switch (media){
      case "mobile":
        text = "(max-width: 560px)";
        break;
      case "tablet":
        text = "(max-width: 820px)";
        break;
      default:
        text = "(min-width: 821px)";
    }
    
    function changeMatch() {
      const { matches } = window.matchMedia(text); //matches é um parametro dentro do matchMedia que garante que a media passada é true ou false;
      setMatch(matches);
    }

    window.addEventListener('resize', changeMatch);
    return () => {
      window.removeEventListener('resize', changeMatch);
    };
  }, [media]);

  return match;
};

export default useMedia;
