<script>
import { invalidate, goto } from "$app/navigation";

invalidate("app:logout")
goto("/login")

</script>
