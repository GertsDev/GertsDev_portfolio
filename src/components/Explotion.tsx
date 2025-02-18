// Explosion.tsx
const Explosion = ({ onAnimationEnd }: { onAnimationEnd: () => void }) => {
    return (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center"
        onAnimationEnd={onAnimationEnd}
      >
        <div className="animate-explode absolute h-screen w-screen bg-yellow-500 opacity-75" />
        <div className="animate-explode absolute h-screen w-screen bg-orange-500 opacity-50 delay-75" />
        <div className="animate-explode absolute h-screen w-screen bg-red-500 opacity-25 delay-100" />
      </div>
    );
  };
  
  export default Explosion;