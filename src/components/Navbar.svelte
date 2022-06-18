<script lang="ts">
    import {
        Nav,
        Navbar,
        NavbarBrand,
        NavItem,
        NavLink
    } from 'sveltestrap'
    import { noteCount } from '../stores'
</script>

<Navbar color="dark" dark expand="lg">
    <NavbarBrand href="/">Dispensable Notes</NavbarBrand>
    <Nav class="ms-auto">
        <NavItem>
            <NavLink href="/">Home</NavLink>
        </NavItem>
        <NavItem>
            <NavLink href="/create">Create Note</NavLink>
        </NavItem>
        <NavItem>
            <NavLink href="/read">Read Note</NavLink>
        </NavItem>
        <NavItem>
            <NavLink disabled>Notes Created: { $noteCount }</NavLink>
        </NavItem>
    </Nav>
</Navbar>