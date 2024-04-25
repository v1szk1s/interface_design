<script>
import "../app.pcss";
import { page } from '$app/stores';
import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
import { Footer, FooterCopyright, FooterLinkGroup, FooterLink, FooterIcon } from 'flowbite-svelte';
import { FacebookSolid, YoutubeSolid, TwitterSolid } from 'flowbite-svelte-icons';
import { DarkMode } from 'flowbite-svelte';

$: activeUrl = $page.url.pathname;
let activeClass = 'text-white bg-green-700 md:bg-transparent md:text-green-700 md:dark:text-white dark:bg-green-600 md:dark:bg-transparent';
let nonActiveClass = 'text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-teal-700 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent';

</script>
<header>
    <Navbar  >
        <NavBrand href="/">
            <!-- <img src="/images/cc_dark.png" class="me-3 h-6 sm:h-9" alt="CC logo" /> -->
            <div class="bg-ccd dark:bg-ccl bg-no-repeat bg-cover w-[90px] h-[56px] m-0 p-0"></div>
        </NavBrand>
        <div class="flex md:order-1">
            <DarkMode />
            <NavHamburger  />
        </div>
        <NavUl {activeUrl} {activeClass} {nonActiveClass}>
            <NavLi href="/">Home</NavLi>
            <NavLi href="/book">Booking</NavLi>
            <NavLi href="/price">Pricing</NavLi>
            <NavLi href="/contact">Contact</NavLi>
        </NavUl>
    </Navbar>
</header>
<slot></slot>
<footer>
    <Footer footerType="socialmedia">
        <div class="md:flex md:justify-around">
            <div>
                <h2 class="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">Follow us</h2>
                <FooterLinkGroup>
                    <FooterLink liClass="mb-4" href="/">Facebook</FooterLink>
                    <FooterLink liClass="mb-4" href="/">YouTube</FooterLink>
                </FooterLinkGroup>
            </div>
            <div>
                <h2 class="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">Legal</h2>
                <FooterLinkGroup>
                    <FooterLink liClass="mb-4" href="/eula/privacy_and_policy">Privacy Policy</FooterLink>
                    <FooterLink liClass="mb-4" href="/eula/terms_and_conditions">Terms & Conditions</FooterLink>
                </FooterLinkGroup>
            </div>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8 mx-auto" />
        <div class="sm:flex sm:items-center sm:justify-center justify-center">
            <FooterCopyright href="/" by="C&C™" />
            <div class="flex ms-5 mt-4 space-x-6 rtl:space-x-reverse sm:justify-center sm:mt-0">
                <FooterIcon href="/">
                    <FacebookSolid class="w-5 h-5 text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white" />
                </FooterIcon>
                <FooterIcon href="/">
                    <TwitterSolid class="w-5 h-5 text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white" />
                </FooterIcon>
                <FooterIcon href="/">
                    <YoutubeSolid class="w-5 h-5 text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white" />
                </FooterIcon>
            </div>
        </div>
    </Footer>
</footer>
