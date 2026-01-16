# Đà Lạt Travel Chatbot - Design Guidelines

## Brand Identity

**Purpose**: Help travelers discover and plan activities in Đà Lạt through conversational AI guidance.

**Aesthetic Direction**: **Organic/Natural with Vietnamese Character**
- Soft, earthy palette inspired by Đà Lạt's pine forests, flower gardens, and cool mountain atmosphere
- Rounded, approachable UI that feels like chatting with a knowledgeable local friend
- Breathing room between elements, reminiscent of spacious mountain vistas

**Memorable Element**: Location suggestion chips that feel like plucking petals from Đà Lạt's famous flowers.

## Navigation Architecture

**Structure**: Drawer Navigation
- Main chat screen (default view)
- Drawer contains: Chat history, Saved locations, Settings, About

**Core Screens**:
1. Chat - Primary conversation interface
2. Chat History - Past conversations (drawer)
3. Saved Locations - Bookmarked places (drawer)
4. Settings - App preferences (drawer)

## Screen-by-Screen Specifications

### 1. Chat Screen
**Purpose**: Main conversation area with AI travel advisor.

**Layout**:
- Header: Custom transparent header
  - Left: Hamburger menu icon (opens drawer)
  - Center: "Tư vấn du lịch Đà Lạt" title
  - Right: None
- Main content: Chat message list (scrollable, inverted)
  - Messages align left (AI) and right (user)
  - Suggestion chips appear below AI messages
- Floating input bar at bottom with rounded text field and send button
- Top inset: headerHeight + Spacing.xl
- Bottom inset: insets.bottom + Spacing.xl

**Components**:
- Message bubbles (AI: surface color, User: primary color)
- Location suggestion chips (horizontal scrollable row)
- Input field with placeholder "Hỏi về Đà Lạt..."
- Send button (icon)

**Empty State**: Welcome message with suggested questions displayed as chips.

### 2. Chat History Screen
**Purpose**: Browse previous conversations.

**Layout**:
- Header: Default navigation header with "Lịch sử chat" title
- Main content: Scrollable list of past chats
  - Each item shows date, preview snippet, thumbnail
- Top inset: Spacing.xl
- Bottom inset: insets.bottom + Spacing.xl

**Empty State**: Illustration showing empty-history.png with text "Chưa có cuộc trò chuyện nào"

### 3. Saved Locations Screen
**Purpose**: View bookmarked travel spots.

**Layout**:
- Header: Default navigation header with "Địa điểm đã lưu" title
- Main content: Scrollable grid/list of saved locations
  - Each card shows location name, category tag, image
- Top inset: Spacing.xl
- Bottom inset: insets.bottom + Spacing.xl

**Empty State**: Illustration showing empty-saved.png with text "Chưa có địa điểm nào"

### 4. Settings Screen
**Purpose**: App customization and account options.

**Layout**:
- Header: Default navigation header with "Cài đặt" title
- Main content: Scrollable form
  - Profile section (avatar, display name)
  - Language preference (Tiếng Việt/English toggle)
  - Notification settings
  - About/Privacy links
- Top inset: Spacing.xl
- Bottom inset: insets.bottom + Spacing.xl

## Color Palette

**Primary**: `#2D7A4F` (Forest green - Đà Lạt pine forests)
**Accent**: `#E56B6F` (Soft coral - flower markets)
**Background**: `#F8F9F5` (Warm off-white)
**Surface**: `#FFFFFF` (Message bubbles, cards)
**Text Primary**: `#2C3531` (Dark charcoal)
**Text Secondary**: `#6B7280` (Muted gray)
**Border**: `#E5E7EB` (Light gray)

**Semantic**:
- Success: `#059669` (Confirmation actions)
- Warning: `#F59E0B` (Alerts)

## Typography

**Font**: Nunito (Google Font) for friendly, approachable feel paired with system sans-serif fallback.

**Type Scale**:
- Title Large: 24px, Bold
- Title: 20px, Bold
- Subtitle: 16px, SemiBold
- Body: 16px, Regular
- Caption: 14px, Regular
- Small: 12px, Regular

## Visual Design

- Rounded corners: 16px for cards/bubbles, 24px for input field, 12px for chips
- Spacing scale: xs=4, sm=8, md=12, lg=16, xl=24, xxl=32
- Suggestion chips: Primary color background with white text, horizontal padding 16px, height 36px
- Message bubbles: Max width 75% screen width, padding 12px horizontal, 8px vertical
- Floating input bar shadow:
  - shadowOffset: {width: 0, height: -2}
  - shadowOpacity: 0.08
  - shadowRadius: 4
- All interactive elements use subtle scale animation on press (0.97)

## Assets to Generate

1. **icon.png** - App icon featuring stylized pine tree with mountain silhouette in primary green
   - WHERE USED: Device home screen

2. **splash-icon.png** - Simplified version of app icon for splash screen
   - WHERE USED: App launch screen

3. **welcome-chat.png** - Illustration of Đà Lạt landmarks (pagoda, flowers, mountains) in soft, minimal style
   - WHERE USED: Chat screen empty state (before first message)

4. **empty-history.png** - Simple illustration of empty speech bubbles in muted colors
   - WHERE USED: Chat History screen when no conversations

5. **empty-saved.png** - Illustration of map with bookmark icon in muted colors
   - WHERE USED: Saved Locations screen when no items

6. **default-avatar.png** - Circular avatar with pine tree icon
   - WHERE USED: Settings screen user profile section

All illustrations should use the defined color palette with soft gradients and organic shapes, avoiding sharp geometric patterns.