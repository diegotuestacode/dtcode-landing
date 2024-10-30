
const CardContent = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {

    const LOGO = '/assets/images/lineas-fondo-card-content.png'



    return (
        <section className={`w-full bg-colorPrimary min-h-[100px] relative`}>
        <div className="absolute inset-0" style={{ backgroundImage: `url(${LOGO})`, opacity: 0.4, backgroundSize: 'cover' }} />
        <div className="relative container z-10 flex flex-col mx-auto gap-10 py-10 ">
            {children}
        </div>
    </section>
    )
}

export default CardContent