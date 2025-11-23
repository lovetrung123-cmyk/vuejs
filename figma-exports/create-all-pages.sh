#!/bin/bash

# Function to create mobile HTML based on desktop HTML
create_mobile_from_desktop() {
    local page_dir=$1
    local page_name=$2
    
    # Copy desktop HTML to mobile with modifications for mobile layout
    if [ -f "$page_dir/desktop/index.html" ]; then
        cat "$page_dir/desktop/index.html" | sed 's/Dashboard/'$page_name'/g' > "$page_dir/mobile/index.html"
    fi
    
    # Create simple mobile CSS
    cat > "$page_dir/mobile/style.css" << 'CSS'
/* Mobile specific overrides */
@media (max-width: 640px) {
    .stats-grid {
        grid-template-columns: 1fr !important;
    }
    
    .page-content {
        padding: 16px !important;
    }
    
    .card {
        padding: 16px !important;
    }
    
    .page-title {
        font-size: 24px !important;
    }
    
    .stat-value {
        font-size: 24px !important;
    }
}
CSS
}

# Create mobile versions for all pages
create_mobile_from_desktop "02-Dashboard" "Dashboard"

echo "Mobile pages created!"
