const navigateTo = (e) =>
{
    e.preventDefault();
    const { href } = e.currentTarget;
    requestAnimationFrame(() =>
    {
        window.scroll({
            top:
                document.querySelector(
                    href.slice(href.lastIndexOf("/") + 1)
                ).offsetTop - 90,
            behavior: "smooth",
        })
    })
}

export default navigateTo